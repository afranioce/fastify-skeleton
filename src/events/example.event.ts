export default interface ExampleEvent {
  added: (el: string, wasNew: boolean) => void;
  deleted: (deletedCount: number) => void;
}
