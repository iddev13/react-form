import { Field, reduxForm, reset } from "redux-form"
import { required, email } from "../../../utils/validators";
import { Input } from "../../common/form-controls/FormControls";


const afterSubmit = (result, dispatch) =>
	dispatch(reset('home'));

const HomeForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}  >
			<div className="form__item">
				<label htmlFor="home">email</label>
				<Field
					name="home"
					component={Input}
					type="text"
					placeholder="Enter some text..."
					validate={[required, email]}
				/>
			</div>
			<div className="form__item">
				<button className="btnSubmit">send</button>
			</div>
		</form>
	)
}

const HomeReduxForm = reduxForm({ form: 'home', onSubmitSuccess: afterSubmit })(HomeForm)

export default HomeReduxForm;