export const FORM_UPDATE_TITLE = 'FORM_UPDATE_TITLE';
export const updateFormTitle = title => ({
  type: FORM_UPDATE_TITLE,
  payload: title
});

export const FORM_UPDATE_GOAL = 'FORM_UPDATE_GOAL';
export const updateFormGoal = goal => ({
  type: FORM_UPDATE_GOAL,
  payload: goal
});
