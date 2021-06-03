import { Field, reduxForm, reset } from "redux-form"
import { required, maxLenghtCreator } from "../../../utils/validators";
import { Input } from "../../common/form-controls/FormControls";

const maxSymbolLength = maxLenghtCreator(10);

const afterSubmit = (result, dispatch) =>
	dispatch(reset('home'));

const HomeForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}  >
			<div className="form__item">
				<Field
					name="home"
					component={Input}
					type="text"
					placeholder="Enter some text..."
					validate={[required, maxSymbolLength]}
				/>
			</div>
			<div className="form__item">
				<button>send</button>
			</div>
		</form>
	)
}

const HomeReduxForm = reduxForm({ form: 'home', onSubmitSuccess: afterSubmit })(HomeForm)

export default HomeReduxForm;