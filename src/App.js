import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const form = useRef();
	const sendMail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				'service_j34k1om',
				'template_orjk5r1',
				form.current,
				'z8_1TmMGQ3g7rfYPZ'
			)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const notify = () => {
		toast.success('Message Sent');
	};
	return (
		<div className='w-screen h-screen flex justify-center items-center'>
			<div className='p-4'>
				<h2 className='text-3xl font-bold uppercase text-center mb-8'>
					Contact Form
				</h2>
				<form ref={form} onSubmit={sendMail} className='flex flex-col gap-4'>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						className='outline-none p-2 border border-slate-700'
						name='name'
					/>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						className='outline-none p-2 border border-slate-700'
						name='email'
					/>
					<label>Message</label>
					<textarea
						name='message'
						className='outline-none p-2 border border-slate-700'
						rows={5}
					/>
					<button
						className='p-2 bg-slate-900 text-teal-50 text-lg'
						type='submit'
						onClick={notify}>
						Send
					</button>
					<ToastContainer />
				</form>
			</div>
		</div>
	);
}

export default App;
