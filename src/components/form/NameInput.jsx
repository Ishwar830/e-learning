export default function NameInput({ name, onNameChange }) {
   return (
      <div className="flex gap-2 items-center justify-between">
         <label htmlFor="user-name">Name:</label>
         <input
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            className="border rounded-sm p-1"
            type="text"
            name="user-name"
            id="user-name"
            required
         />
      </div>
   );
}
