import React from 'react';
import { Button, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import {} from "firebase/database";

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from '../components/CategoryPickerItem';
import Screen from "../components/Screen";
import AppButton from '../components/Button';


const searchSchema = Yup.object().shape({
  category: Yup.object().required('Required').nullable().label("Food Type"),
});

const categories = [
    {
      backgroundColor: "#fc5c65",
      icon: "coffee",
      label: "Breakfast",
      value: "breakfast",
    },
    {
      backgroundColor: "#fd9644",
      icon: "food",
      label: "Lunch",
      value: "lunch",
    },
    {
      backgroundColor: "#fed330",
      icon: "food-fork-drink",
      label: "Dinner",
      value: "dinner",
    },
  ];
function SeachScreen({navigation}) {
    return (
        <Screen style={styles.container}>       
          <Form
        initialValues={{
          category: null,
        }}
        onSubmit={() => console.log("submit")}
        validationSchema={searchSchema}
        >
            <Picker 
                items={categories}
                name="category"
                numberOfColumns={3}
                PickerItemComponent={CategoryPickerItem}
                placeholder="Food Type"
                width="80%"
            />
            <SubmitButton title="Search" />
        </Form>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        alignItems: "center",
    },
})
export default SeachScreen;