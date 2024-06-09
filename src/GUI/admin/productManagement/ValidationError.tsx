import { FieldError } from "react-hook-form";

type Props = {
  fieldError: FieldError | undefined;
};

export function ValidationError({ fieldError }: Props) {
  if (!fieldError) {
    return null;
  }
  return <div className="text-red text-xs mt-1">{fieldError.message}</div>;
}
