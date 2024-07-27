export interface InputElementInteface {
    label?: string;
    placeholder: string;
    type: string;
    errors: InputErrorInterface[];
}

export interface InputErrorInterface {
  key: string,
  label: string,
}
  