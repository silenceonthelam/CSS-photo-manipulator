import React from "react";

export const Panel = ({children, isCollapsed, panelId, panelName, togglePanel}) => (
    <section className={"panel" + (isCollapsed ? "--collapsed" : "")}>
        <h3 className="panel__head" onClick={togglePanel}>
            <span className="panel__head__toggle">
                {isCollapsed ? "+" : "-"}
            </span>
            {panelName}
        </h3>
        <section className="panel__body">
            {children}
        </section>
    </section>
);