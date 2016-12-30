import * as PhotoActions         from "../actions";
import {bindActionCreators}      from "redux";
import {connect}                 from "react-redux";
import {CtrlWrap}                from "../components/CtrlWrap";
import {Panel}                   from "../components/Panel";
import {Photo}                   from "../components/Photo";
import React, {Component, Props} from "react";

var timeoutId;

const mobileBrkpt = 960;

export default connect(({
    ctrls, isMobile, panels
}) => ({
    ctrls: ctrls.ctrls, 
    isMobile: isMobile.isMobile, 
    panels: panels.panels
}), (dispatch) => ({
    actions: bindActionCreators(PhotoActions, dispatch)
}))(class App extends Component {
    componentWillMount() {
        if (window.innerWidth < mobileBrkpt) {
            this.props.actions.updateIsMobile({isMobile: true});
        }
    }
    componentWillUpdate(nextProps, nextState) {
        if (!this.props.isMobile && nextProps.isMobile) {
            this.props.actions.collapseAllPanels();
        } else if (this.props.isMobile && !nextProps.isMobile) {
            this.props.actions.expandAllPanels();
        }
    }
    render() {
        const {
            ctrls,
            isMobile,
            panels
        } = this.props;

        const {
            togglePanel,
            updateCb,
            updateSlider
        } = this.props.actions;

        return (
            <main className="app">
                <Photo cssVals={ctrls} />
                <section className="app__panels">
                    {this.renderPanels(
                        ctrls, 
                        panels, 
                        isMobile,
                        togglePanel, 
                        updateCb,
                        updateSlider
                    )}
                </section>      
            </main>
        );
    }
    componentDidMount() {
        if (this.props.isMobile || window.innerWidth < mobileBrkpt) {
            this.props.actions.collapseAllPanels();
        }

        if (timeoutId) {
            window.clearTimeout(timeoutId);
        }

        timeoutId = window.setTimeout(() => {    
            window.addEventListener("resize", () => {
                if (window.innerWidth < mobileBrkpt) {
                    this.props.actions.updateIsMobile({isMobile: true});
                } else {
                    this.props.actions.updateIsMobile({isMobile: false});
                }
            });
        }, 200);
    }
    componentWillUnmount() {
        window.removeEventListener("resize");
    }
    renderCtrls(ctrls, updateCb, updateSlider) {
        return ctrls.map(ctrl => {
            return (
                <CtrlWrap    
                    key={ctrl.name}
                    ctrl={ctrl}
                    updateCb={updateCb}
                    updateSlider={updateSlider} />
            );
        });  
    }
    renderPanels(ctrls, panels, isMobile, togglePanel, updateCb, updateSlider) {
        return panels.map(panel => {
            const panelCtrls = ctrls.filter(s => s.panelType === panel.panelId);

            return (
                <Panel
                    isCollapsed={panel.isCollapsed}
                    key={panel.panelId}
                    panelId={panel.panelId}
                    panelName={panel.displayName}
                    togglePanel={(e) => 
                        { isMobile && togglePanel(panel.panelId, !panel.isCollapsed) }}>

                    { this.renderCtrls(panelCtrls, updateCb, updateSlider) }   
                </Panel>
            );
        });
    }
});