import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    // Spread operator magic! Instead of onChange={field.input.onChange} etc...
    // Put all the props of field.input on to the input element.
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
                {field.meta.error}
            </div>
        );
    }

    render() {
        return (
            <div>
                <form>
                    <Field
                        name="title"
                        label="Title"
                        component={this.renderField}
                    />
                    <Field
                        name="content"
                        label="Content"
                        component={this.renderField}
                    />
                    <Field
                        name="categories"
                        label="Categories"
                        component={this.renderField}
                    />
                </form>
            </div>
        );
    }
}

// Called automatically on submit!
//  values = {title: "sadf", content: "asdf", categories: "asdf"}
function validate(values) {
    const errors = {};

    // Validate the input from 'values'
    if (!values.title || values.title.length < 3) {
        errors.title = "Please enter a title that is at least 3 characters!"
    }
    if (!values.content) {
        errors.content = "Please enter some content!"
    }
    if (!values.categories) {
        errors.categories = "Please enter a category!"
    }

    // If errors is empty, the form is fine to submit.
    // If errors has *any* properties, redux form assumes form is invalid.
    return errors;
}

// Like the connect helper. Make it interact with redux-form
// The form name needs to be unique!
export default reduxForm({
    validate: validate,
    form: 'PostsNewForm'
})(PostsNew);