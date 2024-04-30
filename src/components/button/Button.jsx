import './Button.scss';

const Button = ({ type = 'button', onClick, children, ...attr }) => {
    return (
      <button type={type} onClick={onClick} {...attr}>
        {children}
      </button>
    );
};

export default Button;