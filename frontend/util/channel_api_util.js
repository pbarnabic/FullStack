export const createChannel = channel => (
  $.ajax({
    method: 'POST',
    url: '/api/channels',
    data: {channel}
  })
);

export const fetchChannel = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/channels/${id}`
  })
);

export const fetchChannels = () => (
  $.ajax({
    method: "GET",
    url: `/api/channels`
  })
);
export const fetchDefaultChannel = () => (
  $.ajax({
    method:"get",
    url:"/api/channels/fetchOne"
  })
);

export const fetchChannelUsers = (id) => (
  $.ajax({
    method: "get",
    url: `/api/channels/${id}/fetchChannelUsers`
  })
)

export const fetchForeignChannels = () => (
  $.ajax({
    method: "GET",
    url: `/api/channels/fetchForeignChannels`
  })
);

export const createChannelMembership = (channel) =>(
  $.ajax({
    method: "POST",
    url: "/api/channel_memberships",
    data: {channel}
  })
)
