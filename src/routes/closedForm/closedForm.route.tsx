import { ClosedFormContainer, ClosedFormText } from "./closedForm.styles";

function ClosedForm({ formTitle }: { formTitle: string }) {
  return (
    <ClosedFormContainer>
      <ClosedFormText>
        {formTitle} form has stop stopped receiving responses!!
      </ClosedFormText>
    </ClosedFormContainer>
  );
}
export default ClosedForm;
