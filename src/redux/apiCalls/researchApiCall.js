import { ResearchActions } from "../slices/reasearchsSlice";
import request from "../../utils/request";
import { toast } from "react-toastify";
import { authActions } from "../slices/authSlice";


import { saveAs } from 'file-saver';
// import XLSX from 'xlsx';
import * as XLSX from 'xlsx';


// Fetch Posts Based On Page Number
export function fetchResearchs(id,type,startDate,endDate,MagazineType) {
  return async (dispatch,getState) => {
    try {
      
      const { data } = await request.get(`api/researchsRegistere/${id}/report?type=${type}&startDate=${startDate}&endDate=${endDate}&MagazineType=${MagazineType}`,{
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
          "Content-Type": "application/json; charset=utf-8",
        }
      });
      dispatch(ResearchActions.Researchs(data));

      // Generate Excel file and download it
      generateExcelFile(data);
    } catch (error) {
      // Handle errors
      if (error.response && error.response.data && error.response.data.message) {
        console.error("API error message:", error.response.data.message);
        toast.error(error.response.data.message);
      } else {
        console.error("Unexpected error:", error);
        toast.error("An error occurred while processing your request.");
      }
    }
  };
}




function generateExcelFile(data) {
  // Format data and generate Excel file
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  // Generate Excel file
  const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
  saveAs(blob, 'exported_data.xlsx');
}





