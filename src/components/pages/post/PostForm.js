import { Field, reduxForm, reset } from "redux-form"
import { maxLenghtCreator, required } from "../../../utils/validators"
import { Checkbox, Input } from "../../common/form-controls/FormControls";

const maxSymbolLength = maxLenghtCreator(10);

const afterSubmit = (result, dispatch) =>
	dispatch(reset('post'));

const PostForm = (props) => {

	// debugger
	return (
		<form onSubmit={props.handleSubmit} >
			<div className="form__item">
				<label htmlFor="login">
					login
				</label>
				<Field
					name="login"
					component={Input}
					type="text"
					placeholder="Enter some text..."
					validate={[required, maxSymbolLength]}
				/>
			</div>
			<div className="form__item">
				<label htmlFor="password">
					password
					</label>
				<Field
					name="password"
					component={Input}
					type="text"
					placeholder="Enter some text..."
					validate={[required, maxSymbolLength]}
				/>
			</div>
			<div className="form__item">
				<label htmlFor="rememberMe">
					remember me
				</label>
				<Field
					name="rememberMe"
					id="rememberMe"
					className="formCheckbox"
					component={Checkbox}
					type="checkbox"
					validate={[required]}
				/>
			</div>
			<div className="form__item">
				<button className="btnSubmit">send</button>
			</div>
		</form>
	)
}

const PostReduxForm = reduxForm({ form: 'post', onSubmitSuccess: afterSubmit })(PostForm)

export default PostReduxForm;