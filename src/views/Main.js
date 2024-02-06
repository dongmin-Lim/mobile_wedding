import { Box, Typography } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import mainImage from "../images/main_image.jpeg";

function Main() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          p: 2,
        }}
      >
        <VolumeUpIcon />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: 10,
        }}
      >
        <Typography
          style={{
            writingMode: "vertical-rl" /* 세로로 쓰기 모드 */,
            textOrientation: "upright" /* 텍스트 방향 */,
            whiteSpace: "nowrap" /* 텍스트가 너비를 초과할 경우 줄 바꿈 방지 */,
            fontSize: "1.5rem" /* 원하는 폰트 크기 */,
            letterSpacing: "1em" /* 글자 간격 조절 */,
            fontFamily: "Gowun Batang",
            fontWeight: 700,
            color: "#69583c",
          }}
        >
          시 작
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: 5,
        }}
      >
        <Typography
          variant="h6"
          style={{
            whiteSpace: "nowrap" /* 텍스트가 너비를 초과할 경우 줄 바꿈 방지 */,
            fontSize: "1rem" /* 원하는 폰트 크기 */,
            fontFamily: "Gowun Batang",
            color: "#69583c",
          }}
        >
          2024년 6월 1일 토요일 오후 3시 30분
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "2px",
          width: "10rem",
          backgroundColor: "grey",
          margin: "0 auto",
          mt: 1,
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 1,
        }}
      >
        <Typography
          variant="h6"
          style={{
            whiteSpace: "nowrap" /* 텍스트가 너비를 초과할 경우 줄 바꿈 방지 */,
            fontSize: "1rem" /* 원하는 폰트 크기 */,
            fontFamily: "Gowun Batang",
            color: "#69583c",
          }}
        >
          임동민 | 진주현
        </Typography>
      </Box>
      <Box sx={{ p: 5, border: "0px solid red" }}>
        <img
          src={mainImage} // 이미지 경로에 맞게 수정하세요.
          alt="My Image"
          width="300" // 이미지의 가로 크기
        />
      </Box>
    </Box>
  );
}
export default Main;
