export interface HeaderProps {
  activeTab: number;
  setActiveTab: (test: number) => void;
}

export interface InputFieldProps {
  label: string;
  name: string;
  tooltip?: string;
  value: string;
  error: boolean;
  onChange: (e: any) => void;
}