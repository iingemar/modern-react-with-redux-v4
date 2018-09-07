import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from "../actions";


class PostsNew extends Component {
    // Spread operator magic! Instead of onChange={field.input.onChange} etc...
    // Put all the props of field.input on to the input element.
    renderField(field) {
        const hasError = field.meta.touched && field.meta.error;
        const className = `form-group ${hasError ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
                <div className="text-help">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        );
    }

    // Here we want to call an action creator that POST to our api backend.
    onSubmit(values) {
        // this === component, because we did .bind(this)
        console.log(values);
        this.props.createPost(values);
    }

    render() {
        // Added to props from reduxForm helper
        // Handles the redux forms stuffs like validation etc.
        // Then it calls our onSubmit that posts to api.
        const { handleSubmit } = this.props;

        // Every field has 3 states;
        // pristine - brand new and shiny
        // touched - focused, entered text and then clicked away
        // invalid - some error input

        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link className="btn btn-danger" to="/posts">
                        Cancel
                    </Link>
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
})(
    connect(null, { createPost })(PostsNew)
);


