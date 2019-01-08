using FileManager.IServices;
using FileManager.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Unity;

namespace FileManager.Infrastructure
{
	/// <summary>
	/// Container creater 
	/// </summary>
	public static class UnityDI
	{
		/// <summary>
		/// constructor
		/// </summary>
		static UnityDI()
		{
			DiContainer = new UnityContainer();
			DiContainer.RegisterType<IDirectoryService, DirectoryService>();
			DiContainer.RegisterType<IFileService, FileService>();
			DiContainer.RegisterType<IDriveService, DriveService>();
		}

		/// <summary>
		/// di Container
		/// </summary>
		public static UnityContainer DiContainer { get; private set; }
	}
}