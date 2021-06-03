import './FormControls.css';

export const Input = ({ input, meta, ...props }) => {
	return (
		<div className={`formControl ${meta.error && meta.touched ? "error" : ''}`}>
			<div>
				<input {...input} {...props} />
			</div>
			{meta.error && meta.touched && <span>{meta.error}</span>}
		</div>
	)
}