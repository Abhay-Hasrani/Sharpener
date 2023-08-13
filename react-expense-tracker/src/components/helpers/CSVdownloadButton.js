import { useCSVDownloader } from "react-papaparse";
const CSVdownloadButton = (props) => {
  const { CSVDownloader, Type } = useCSVDownloader();
  const data = props.data;
  const fileName = `${localStorage.getItem("username")}_Expenses.csv`;
  console.log(fileName);
  return (
    <CSVDownloader
      type={Type.Button}
      filename={fileName}
      bom={true}
      data={data}
      config={{ delimiter: "," }}
    >
      Download
    </CSVDownloader>
  );
};
export default CSVdownloadButton;
