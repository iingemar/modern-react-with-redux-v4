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

// Like the connect helper. Make it interact with redux-form
// The form name needs to be unique!
export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);