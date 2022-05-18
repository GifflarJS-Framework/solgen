export interface IEventCall {
    statement: "event_call";
    name: string;
    variables: Array<string>;
}
