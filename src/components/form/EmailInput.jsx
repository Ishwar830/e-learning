export default function EmailInput({ email, onEmailChange }) {
   return (
      <div className="flex gap-2 items-center justify-between">
         <label htmlFor="user-mail">Email:</label>
         <input
            value={email}
            onChange={onEmailChange}
            className="border rounded-sm p-1"
            type="email"
            name="user-mail"
            id="user-mail"
            required
         />
      </div>
   );
}
