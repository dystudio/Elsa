///<reference path="activity.ts"/>
///<reference path="connection.ts"/>
///<reference path="workflow-metadata.ts"/>
///<reference path="workflow-status.ts"/>

namespace Elsa {
    export interface IWorkflow {
        metadata: IWorkflowMetadata;
        activities: IActivity[];
        connections: IConnection[];
        status: WorkflowStatus;
    }   
}