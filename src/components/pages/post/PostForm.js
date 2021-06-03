import { Field, reduxForm, reset } from "redux-form"
import { maxLenghtCreator, required } from "../../../utils/validators"
import { Input } from "../../common/form-controls/FormControls";

const maxSymbolLength = maxLenghtCreator(10);

const afterSubmit = (result, dispatch) =>
	dispatch(reset('post'));

const PostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} >
			<div className="form__item">
				<Field

					name="post"
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

const PostReduxForm = reduxForm({ form: 'post', onSubmitSuccess: afterSubmit })(PostForm)

export default PostReduxForm;