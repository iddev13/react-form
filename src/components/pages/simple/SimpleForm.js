import { Field, reduxForm, reset } from "redux-form"
import { required } from "../../../utils/validators"
import { Checkbox, Input, RadioBtn, Select } from "../../common/form-controls/FormControls"

const afterSubmit = (result, dispatch) => {
	dispatch(reset('simple'))
}

const SimpleForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} >
			<div className="form__item">
				<label htmlFor="firstName">first name</label>
				<Field
					name="firstName"
					type="text"
					component={Input}
					placeholder="First Name"
				/>
			</div>
			<div className="form__item">
				<label htmlFor="lastName">last name</label>
				<Field
					name="lastName"
					type="text"
					component={Input}
					placeholder="Last Name"
				/>
			</div>
			<div className="form__item">
				<label htmlFor="email">email</label>
				<Field
					name="email"
					type="text"
					component={Input}
					placeholder="Email"
				/>
			</div>
			<div className="form__item">
				<label htmlFor="gender">male</label>
				<Field
					name="gender"
					type="radio"
					className="formRadio"
					component={RadioBtn}
				/>
			</div>
			<div className="form__item">
				<label htmlFor="gender">female</label>
				<Field
					name="gender"
					type="radio"
					className="formRadio"
					component={RadioBtn}
				/>
			</div>
			<div className="form__item">
				<label>Favorite Color</label>
				<Field
					name="email"
					component={Select}
				/>
			</div>
			<div className="form__item">
				<label htmlFor="gender">remember me</label>
				<Field
					name="rememberMe"
					id="rememberMe"
					className="formCheckbox"
					component={Checkbox}
					type="checkbox"
				// validate={[required]}
				/>
			</div>
			<div className="form__item">
				<button className="btnSubmit">send</button>
			</div>
		</form>
	)
}

const SimpleReduxForm = reduxForm({ form: 'simple', onSubmitSuccess: afterSubmit })(SimpleForm);

export default SimpleReduxForm;