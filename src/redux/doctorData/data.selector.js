import { createSelector } from "reselect";

const selectDoctorsData = doctors => doctors.doctors;

export const selectDoctorsContents = createSelector(
    [selectDoctorsData],
    doctors => doctors.data
);

export const selectDoctorsDataForPreview = createSelector(
    [selectDoctorsContents],
    items => Object.keys(items).map(key => items[key])
);

export const selectDoctorsContent = itemUrlParam => createSelector(
    [selectDoctorsContents],
    items => items[itemUrlParam]
)