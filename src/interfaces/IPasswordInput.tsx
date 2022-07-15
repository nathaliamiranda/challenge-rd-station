export default interface IPasswordInput {
  value: string;
  setField: (param: string) => void;
  label: string;
  placeholder: string;
  setVisibilityPassword: (param: boolean) => void;
  visibility: boolean;
  name:string;
}