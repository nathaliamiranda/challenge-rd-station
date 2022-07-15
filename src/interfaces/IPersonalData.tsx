export default interface IPersonalData {
  setButtonChange: (param: boolean) => void;
  buttonChange: boolean;
  clearState: boolean;
  dontHaveUrl: boolean;
  validUrl: string;
  setClearState: (param: boolean) => void;
}