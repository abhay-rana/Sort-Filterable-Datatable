import { memo } from "react";

const Input = (props) => {
	const default_props = {
		id: props.id,
		max: props.max,
		min: props.min,
		type: props.type,
		name: props.name,
		step: props.step,
		value: props.value,
		style: props.style,
		disabled: props.disabled,
		required: props.required,
		inputMode: props.inputMode,
		maxLength: props.maxLength,
		minLength: props.minLength,
		autoFocus: props.autoFocus,
		placeholder: props.placeholder,
		autoComplete: props.autoComplete,
		onFocus: props.onFocus,
		onKeyUp: props.onKeyUp,
		onChange: props.onChange,
		onKeyDown: props.onKeyDown,
		onKeyPress: props.onKeyPress,
	};
	const { className, error, success, small, large, children, label, stacked, controlRef, light, note } = props;

	let extraClass = "w-full z-0 box-border text-gray-dark focus:border-primary focus:outline-none placeholder-gray-light";

	if (!!small) {
		extraClass += stacked ? " h-7 text-base" : " h-7 px-2 text-base";
	} else if (!!large) {
		extraClass += stacked ? " h-10" : " h-10 px-2";
	} else {
		extraClass += stacked ? " h-8 text-base" : " h-8 px-2 text-base";
	}

	if (!!stacked) {
		extraClass += " border-b bg-transparent px-0";
	} else {
		extraClass += " border";
	}

	if (!!light) {
		extraClass += " text-white placeholder-gray-md";
	}

	const show_error = error != null;
	const show_success = success != null;
	const show_note = note != null;

	if (error) {
		extraClass += " border-danger text-danger";
	} else if (success) {
		extraClass += " border-success";
	} else {
		extraClass += " border-gray-light";
	}

	if (className) {
		extraClass += ` ${className}`;
	}

	return (
		<div className="group">
			{label ? <label className={`text-xs block  ${error ? "text-danger" : "text-gray-light"} group-hover:text-primary`}>{label}</label> : null}
			{children}
			<input {...default_props} className={extraClass} ref={controlRef} />
			{show_error || show_note || show_success ? (
				<div className="h-6">
					{show_error ? (
						<div className="text-xs text-danger">{error}</div>
					) : show_note ? (
						<div className="text-xs text-gray-medium">{note}</div>
					) : show_success ? (
						<div className="text-xs text-success">{success}</div>
					) : null}
				</div>
			) : null}
		</div>
	);
};

export default memo(Input);
