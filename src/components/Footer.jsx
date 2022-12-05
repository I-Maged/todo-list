import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='footer flex justify-center py-3 bg-neutral text-neutral-content'>
      <div>
        <p className='text-xl'>
          Created By{' '}
          <a href='https://github.com/I-Maged' target='_blank' rel='noreferrer'>
            Maged <FaGithub className='inline pl-1 text-2xl' />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
