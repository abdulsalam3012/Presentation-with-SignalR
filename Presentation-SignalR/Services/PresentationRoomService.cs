using Presentation_SignalR.Model;

namespace Presentation_SignalR.Services
{

    public class PresentationRoomService : IPresentationRoomService
    {
        private readonly IDictionary<Guid, PresentationRoom> _connections;
        public PresentationRoomService(IDictionary<Guid, PresentationRoom> connections) { _connections = connections; }

        public Task<Guid> CreatePresentationRoom(string connectionId, string presentationId)
        {
            var id = Guid.NewGuid();
            _connections[id] = new PresentationRoom
            {
                PresentationRoomConnectionId = connectionId,
                PresentationId = presentationId
            };
            return Task.FromResult(id);
        }
        public Task<Guid> GetPresentationRoomForConnectionId(string connectionId)
        {
            var presentationRoom = _connections.FirstOrDefault(
                x => x.Value.PresentationRoomConnectionId == connectionId);

            if (presentationRoom.Key == Guid.Empty)
                throw new ArgumentException("Invalid connection ID");

            return Task.FromResult(presentationRoom.Key);
        }
    }
}
