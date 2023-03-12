import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { ChannelCard, Videos } from "./";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetails(data?.items[0]);
    });
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "250px",
          }}
        />
        <ChannelCard channelDetail={channelDetails} marginTop="-100px" />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "0" } }}>
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
