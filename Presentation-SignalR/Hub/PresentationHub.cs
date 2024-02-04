using Microsoft.AspNetCore.SignalR;
using Presentation_SignalR.Model;
using Presentation_SignalR.Services;

namespace Presentation_SignalR.Hub
{
    public class PresentationHub : Microsoft.AspNetCore.SignalR.Hub
    {
        private readonly IPresentationRoomService _presentationRoomService;
        public PresentationHub(IPresentationRoomService presentationRoomService)
        {
            _presentationRoomService = presentationRoomService;
        }

        public async Task<string> AddGroup()
        {
            var presentationId = Guid.NewGuid().ToString();
            var presentationRoomId = await _presentationRoomService.CreatePresentationRoom(Context.ConnectionId, presentationId);
            await Groups.AddToGroupAsync(Context.ConnectionId, presentationRoomId.ToString());
            await Clients.Caller.SendAsync("ReceiveMessage", "Foo", DateTimeOffset.UtcNow, "bar");
            await base.OnConnectedAsync();
            return presentationId;
        }
        public async Task SendMessageToPresenter(MessageDTO messageDTO)
        {
            messageDTO.Date = DateTime.Now;
            var roomId = await _presentationRoomService.GetPresentationRoomForConnectionId(Context.ConnectionId);
            await Clients.Group(roomId.ToString()).SendAsync("ReceiveMessageFromAudience",messageDTO);
        }
        public async Task EnableAudience(EnableAudienceDTO enableAudienceDTO)
        {
            var roomId = await _presentationRoomService.GetPresentationRoomForConnectionId(Context.ConnectionId);
            await Clients.Group(roomId.ToString()).SendAsync("EnableAudience", enableAudienceDTO);
        }
        public async Task<bool> JoinGroup(string presentationId)
        {
            var roomId = await _presentationRoomService.GetPresentationRoomForConnectionIdUsingPresentationId(presentationId);
            await Groups.AddToGroupAsync(Context.ConnectionId,roomId.ToString());
            await Clients.Caller.SendAsync("ReceiveMessage", "Foo", DateTimeOffset.UtcNow, "bar");
            await base.OnConnectedAsync();
            return true;
        }

    }
}
