import React from "react";
import { useHistory } from "react-router-dom";
import { useData } from "./DataContext";
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { PrimaryButton } from "./components/PrimaryButton";
// import { yupResolver } from 'react-hook-form-resolvers';
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { Input } from "./components/Input";

// import { StateDropdown, RegionDropdown } from 'react-indian-state-region-selector';

import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "First name should not contain numbers")
        .required("First name is a required field"),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
        .required("Last name is a required field"),
    middleName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Last name should not contain numbers"),
    state: yup
        .string()
        .matches(/^([^0-9]*)$/, "State name should not contain numbers")
        .required("State name is a required field"),
    city: yup
        .string()
        .matches(/^([^0-9]*)$/, "City name should not contain numbers")
        .required("City name is a required field"),

});

export const Step1 = () => {
    const { setValues, data } = useData();
    const history = useHistory();


    const { register, handleSubmit, errors } = useForm({
        defaultValues: { firstName: data.firstName, middleName: data.middleName, lastName: data.lastName, state: data.state, city: data.city },
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        history.push("./step2");
        setValues(data);
    };



    // selectState(val) {
    //     this.setState({ State: val });
    // }

    // selectRegion(val) {
    //     this.setState({ region: val });
    // };


    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                PRIMARY DETAILS
      </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    ref={register}
                    id="firstName"
                    type="text"
                    label="First Name"
                    name="firstName"
                    error={!!errors.firstName}
                    helperText={errors?.firstName?.message}
                />
                <Input
                    ref={register}
                    id="middleName"
                    type="text"
                    label="Middle Name"
                    name="middleName"
                    error={!!errors.middleName}
                    helperText={errors?.middleName?.message}
                />
                <Input
                    ref={register}
                    id="lastName"
                    type="text"
                    label="Last Name"
                    name="lastName"
                    error={!!errors.lastName}
                    helperText={errors?.lastName?.message}
                />

                {/* <StateDropdown
                    value={State}
                    onChange={(val) => this.selectState(val)} />
                <RegionDropdown
                    State={State}
                    value={region}
                    onChange={(val) => this.selectRegion(val)} /> */}
                <Input
                    ref={register}
                    id="state"
                    type="text"
                    label="State"
                    name="state"
                    error={!!errors.state}
                    helperText={errors?.state?.message}
                />
                <Input
                    ref={register}
                    id="city"
                    type="text"
                    label="City"
                    name="city"
                    error={!!errors.city}
                    helperText={errors?.city?.message}
                />
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    );
};