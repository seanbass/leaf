export const types = {
    PROFILE: {
        EDIT: "PROFILE.EDIT",
        LOCK: "PROFILE.LOCK"
    }
  };
  
export const editProfile = () => ({
    type: types.PROFILE.EDIT
});

export const lockProfile = () => ({
    type: types.PROFILE.LOCK
});