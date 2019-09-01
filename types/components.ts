import { SyntheticEvent, ReactElement } from 'react'

export interface Amount {
  value: string;
  currency: string;
}

export interface User {
  first: string;
  last: string;
  email: string;
}

export interface ExpenseProps {
  id: string;
  amount: Amount;
  date: string;
  merchant: string;
  receipt: string;
  comment: string;
  category: string;
  user: User;
}

export interface ExpensesProps {
  data: ExpenseProps[];
}

export interface FilterProps {}

export interface FilterValuesProps {
  open: boolean;
}

export interface FilterListProps {
  value: string;
  textVal: string;
  isActive: boolean;
  onClick: (e: SyntheticEvent) => void;
}

export interface FilterButtonProps {}

export interface PaginationProps {
  total: number;
  perPage: number;
  offset: number;
}

export interface IndexHeaderProps {
  perPage: number;
  offset: number;
}

export interface StaticExpenseFieldsProps {
  currency: string;
  value: string;
  first: string;
  last: string;
  email: string;
  merchant: string;
  category: string;
  date: string;
}

export interface DynamicExpenseFieldsProps {
  comment: string;
  id: string;
  receipt: string;
}

export interface ErrorMessageProps {
  error: any;
}

export interface UploadFileProps {
  addReceipt: (value: string) => void;
}

export interface CardWithBtnProps {
  onClick: (e: SyntheticEvent) => void;
}

export interface ImagePreviewProps {
  src: string;
}