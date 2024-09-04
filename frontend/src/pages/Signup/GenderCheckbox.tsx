interface GenderCheckboxProps {
  setCheckboxSelected: (gender: string) => void;
}

export default function GenderCheckbox({ setCheckboxSelected }: GenderCheckboxProps) {
  
  return (
    <div className="mt-5 w-full">
      <select 
        className="select w-full" 
        defaultValue={'default'} 
        onChange={(e) => setCheckboxSelected(e.target.value)}
      >
        <option disabled value='default'>Pick your Gender</option>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
      </select>
    </div>
  )
}
