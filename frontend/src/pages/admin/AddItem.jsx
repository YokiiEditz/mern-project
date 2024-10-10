import {} from "react";

const AddItem = () => {
  //   const [name, setName] = useState("");

  return (
    <div>
      <form>
        {/* <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> */}

        <table className="table-fixed">
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default AddItem;
