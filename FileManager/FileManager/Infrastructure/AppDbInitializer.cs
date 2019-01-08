using FileManager.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;

namespace FileManager.Infrastructure
{
	/// <summary>
	/// App Db Initializer
	/// </summary>
	public class AppDbInitializer : DropCreateDatabaseAlways<ApplicationDbContext>
	{
		/// <summary>
		/// create first user and role
		/// </summary>
		/// <param name="context"></param>
		protected override void Seed(ApplicationDbContext context)
		{
			var userManager = new ApplicationUserManager(new UserStore<ApplicationUser>(context));

			var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));

			var role1 = new IdentityRole { Name = "admin" };
			var role2 = new IdentityRole { Name = "user" };

			roleManager.Create(role1);
			roleManager.Create(role2);

			var admin = new ApplicationUser { Email = "vlad@mail.ru", UserName = "vlad@mail.ru" };
			string password = "1q2w3eM<";
			var result = userManager.Create(admin, password);

			if (result.Succeeded)
			{
				userManager.AddToRole(admin.Id, role1.Name);
			}

			base.Seed(context);
		}
	}
}