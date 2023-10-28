export function PageOne({
  fullName,
  onSetFullname,
  nationalId,
  onSetNationalId,
  email,
  onSetEmail,
  phone,
  onSetPhone,
  university,
  onSetUniversity,
  faculty,
  onSetFaculty,
  graduation,
  onSetGraduation,
}) {
  return (
    <>
      <div className="form__group">
        <input
          value={fullName}
          onChange={(e) => {
            onSetFullname(e.target.value);
          }}
          type="text"
          placeholder="full name"
        />
      </div>
      <div className="form__group">
        <input
          value={nationalId}
          onChange={(e) => onSetNationalId(e.target.value)}
          type="text"
          placeholder="National ID"
        />
      </div>
      <div className="form__group">
        <input
          value={email}
          onChange={(e) => onSetEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
      </div>
      <div className="form__group">
        <input
          value={phone}
          onChange={(e) => onSetPhone(e.target.value)}
          type="text"
          placeholder="Phone Number (Whatsapp No.)"
        />
      </div>
      <div className="form__group">
        <input
          value={university}
          onChange={(e) => onSetUniversity(e.target.value)}
          type="text"
          placeholder="University"
        />
      </div>
      <div className="form__group">
        <input
          value={faculty}
          onChange={(e) => onSetFaculty(e.target.value)}
          type="text"
          placeholder="Faculty"
        />
      </div>
      <div className="form__group ">
        <select
          value={graduation}
          onChange={(e) => onSetGraduation(e.target.value)}
          className="form__select"
          placeholder="Graduation Year"
          defaultValue={'2024'}
        >
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
        </select>
      </div>
    </>
  );
}
