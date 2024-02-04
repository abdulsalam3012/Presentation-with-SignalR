using System.Security.Cryptography.X509Certificates;

namespace Presentation_SignalR.Model
{
    public class MessageDTO
    {
        public string Name { get; set; }
        public string Message { get; set; }
        public string PresentationId { get; set; }
    }
}
