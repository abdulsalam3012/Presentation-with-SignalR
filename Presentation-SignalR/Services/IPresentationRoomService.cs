namespace Presentation_SignalR.Services
{
    public interface IPresentationRoomService
    {
        Task<Guid> CreatePresentationRoom(string connectionId,string presentationId);

        Task<Guid> GetPresentationRoomForConnectionId(string connectionId);
        Task<Guid> GetPresentationRoomForConnectionIdUsingPresentationId(string presentationId);
    }
}
