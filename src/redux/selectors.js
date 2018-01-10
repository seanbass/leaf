export const email = (state) => 'values' in state.form.login ? 
                                    'email' in state.form.login.values ? 
                                        state.form.login.values.email : "" : "" ;
export const password = (state) => 'values' in state.form.login ? 
                                        'password' in state.form.login.values ? 
                                            state.form.login.values.password : "" : "";