export default interface IGenericInput {
  value: string;
  setField: (param: string) => void;
  label: string;
  placeholder: string;
  name: string;
}