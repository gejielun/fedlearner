import { useResetRecoilState } from 'recoil';
import {
  workflowBasicForm,
  workflowConfigForm,
  workflowTemplateForm,
  workflowInEditing,
  templateInUsing,
  peerConfigInPairing,
} from 'stores/workflow';

export function useResetCreateForms() {
  const resetBasicForm = useResetRecoilState(workflowBasicForm);
  const resetJobsConfigForm = useResetRecoilState(workflowConfigForm);
  const resetTemplateForm = useResetRecoilState(workflowTemplateForm);
  const resetWorkflow = useResetRecoilState(workflowInEditing);
  const resetWorkflowInUsing = useResetRecoilState(templateInUsing);
  const resetpeerWorkflow = useResetRecoilState(peerConfigInPairing);

  return function () {
    resetWorkflowInUsing();
    resetWorkflow();
    resetpeerWorkflow();
    resetTemplateForm();
    resetJobsConfigForm();
    resetBasicForm();
  };
}

export function useResetForkForms() {
  return function () {
    // TODO: define fork form
  };
}
