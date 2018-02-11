using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(mvcapplication.Startup))]
namespace mvcapplication
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
