import { useState } from 'react';
import './FormControls.css';

export const Input = ({ input, meta, ...props }) => {
	// debugger
	return (
		<div className={`formControl ${meta.error && meta.touched ? "error" : ''}`}>
			<div className="formControl__item">
				<input {...input} {...props} />
			</div>
			{meta.error && meta.touched && <span>{meta.error}</span>}
		</div>
	)
}

export const Checkbox = ({ input, meta, ...props }) => {

	let [checkboxValue, setCheckboxValue] = useState(false);

	const toggleValue = () => {
		if (checkboxValue) {
			setCheckboxValue(false)
		} else {
			setCheckboxValue(true);
		}
	}

	return (
		<div className={`formControl ${meta.error && meta.touched ? "error" : ''}`}>
			<div className={`formControl__item checkbox ${checkboxValue ? "active" : ""}`} onClick={toggleValue}>
				<input {...input} {...props} />
			</div>
			{meta.error && meta.touched && <span>Check is required</span>}
		</div>
	)
}

export const RadioBtn = ({ input, meta, ...props }) => {

	let [radioValue, setRadioValue] = useState(false);

	const toggleValue = () => {
		if (radioValue) {
			setRadioValue(false)
		} else {
			setRadioValue(true);
		}
	}
	return (
		<div className={`formControl ${meta.error && meta.touched ? "error" : ''}`}>
			<div className={`formControl__item radiobutton ${radioValue ? "active" : ""} `} onClick={toggleValue}>
				<input {...input} {...props} />
			</div>
			{meta.error && meta.touched && <span>Check is required</span>}
		</div>
	)
}

export const Select = ({ input, meta, ...props }) => {

	return (
		<div className={`formControl ${meta.error && meta.touched ? "error" : ''}`}>
			<div className="formControl__item ">
				<div class="select-box">
					<div class="options-container">
						<div class="option">
							<input type="radio" class="radio" name="category" />
							<label></label>
						</div>

						<div class="option">
							<input type="radio" class="radio" name="category" />
							<label></label>
						</div>

						<div class="option">
							<input type="radio" class="radio" name="category" />
							<label></label>
						</div>

						<div class="option">
							<input type="radio" class="radio" name="category" />
							<label></label>
						</div>

						<div class="option">
							<input type="radio" class="radio" name="category" />
							<label></label>
						</div>

						<div class="option">
							<input type="radio" class="radio" name="category" />
							<label></label>
						</div>

						<div class="option">
							<input type="radio" class="radio" name="category" />
							<label></label>
						</div>
						<div class="option">
							<input type="radio" class="radio" name="category" />
							<label></label>
						</div>
						<div class="option">
							<input type="radio" class="radio" name="category" />
							<label></label>
						</div>

					</div>

					<div class="selected">
						green
					</div>
				</div>
			</div>
			{meta.error && meta.touched && <span>Check is required</span>}
		</div >
	)
}

