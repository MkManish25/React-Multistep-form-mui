import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
// import { yupResolver } from 'react-hook-form-resolvers';
import { useData } from "./DataContext";
import Typography from "@material-ui/core/Typography";
import { PrimaryButton } from "./components/PrimaryButton";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import * as yup from "yup";


const schema = yup.object().shape({
    orgName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Organisation name should not contain numbers")
        .required("Organisation name is a required field"),
    experience: yup
        .string()
        .matches(/^([0-9]*)$/, "Experience should contain numbers"),

    salary: yup
        .string()
        .matches(/^([0-9]*)$/, "Salary should contain numbers").required("Salary is a required field"),
    age: yup
        .string()
        .matches(/^([0-9]*)$/, "Age should contain numbers")
        .required("Age is a required field"),
});


export const Step2 = () => {
    const { setValues, data } = useData();
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm({
        defaultValues: {
            orgName: data.orgName,
            experience: data.experience,
            salary: data.salary,
            age: data.age,
        },
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        history.push("./result");
        setValues(data);
    };

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                OFFICIAL DETAILS
      </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    ref={register}
                    id="orgName"
                    type="text"
                    label="Organisation Name"
                    name="orgName"
                    error={!!errors.orgName}
                    helperText={errors?.orgName?.message}

                />
                <Input
                    ref={register}
                    id="experience"
                    type="text"
                    label="Experience"
                    name="experience"
                    error={!!errors.experience}
                    helperText={errors?.experience?.message}

                />
                <Input
                    ref={register}
                    id="salary"
                    type="text"
                    label="Salary"
                    name="salary"
                    error={!!errors.salary}
                    helperText={errors?.salary?.message}

                />
                <Input
                    ref={register}
                    id="age"
                    type="text"
                    label="Age"
                    name="age"
                    error={!!errors.age}
                    helperText={errors?.age?.message}

                />
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    );
};