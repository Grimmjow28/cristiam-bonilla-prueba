export interface ResponseRequest {
    data: any [];
    message?: string;
    name?: string;
}
  
export interface RequestAddForm {
  id: string;
  name: string;
  description: string;
  logo: string;
  date_release: Date;
  date_revision: Date;
}
  