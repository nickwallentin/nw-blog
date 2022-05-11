import { useState } from 'react';

export const ShowcaseToggle = (props) => {
  switch (props.stage) {
    case '1':
      return <ToggleOne {...props} />;
    case '2':
      return <ToggleTwo {...props} />;
    case '3':
      return <ToggleThree {...props} />;
    default:
      return null;
  }
};

const ToggleOne = () => {
  return (
    <div className='p-4 border-2 rounded bg-black/5 border-black/10 dark:border-white/10 dark:bg-white/5'>
      <div className='flex items-center justify-between'>
        <p className='!my-0'>
          <strong>Title</strong>
        </p>{' '}
        <button className='block px-2 rounded bg-black/10 dark:bg-white/10'>
          Open
        </button>
      </div>
      <div>Toggle content</div>
    </div>
  );
};

const ToggleTwo = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='p-4 border-2 rounded bg-black/5 border-black/10 dark:border-white/10 dark:bg-white/5'>
      <div className='flex items-center justify-between'>
        <p className='!my-0'>
          <strong>{title}</strong>
        </p>
        <button
          className='block px-2 rounded bg-black/10 dark:bg-white/10'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Close' : 'Open'}
        </button>
      </div>
      {isOpen && <div>{content}</div>}
    </div>
  );
};

const ToggleThree = () => {
  const [open, toggle] = useToggle();
  return (
    <div className='p-4 border-2 rounded bg-black/5 border-black/10 dark:border-white/10 dark:bg-white/5'>
      <div className='flex items-center justify-between'>
        <p className='!my-0'>
          <strong>Title</strong>
        </p>{' '}
        <button
          onClick={toggle}
          className='block px-2 rounded bg-black/10 dark:bg-white/10'
        >
          Open
        </button>
      </div>
      {open && <div>Toggle content</div>}
    </div>
  );
};

const useToggle = () => {
  const [on, setOn] = useState(false);
  const toggle = () => {
    setOn(!on);
  };
  return [on, toggle];
};
